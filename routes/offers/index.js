const route = require("express").Router();
const models = require("../../common/helpers");
const { authenticate } = require("../../common/authentication");

// @route    /api/offers
// @desc     GET offers
// @Access   Private
route.get("/", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { acct_type } = req.decoded;
  try {
    if (acct_type === "affiliate") {
      let allOffers = await models.get("offers");

      //before reutrnin all offers
      const results = await allOffers.map(async allOffer => {
        let agreements = await models.offerAgreementsAffiliates(
          user_id,
          allOffer
        );

        allOffer.active = agreements ? agreements.active : false;
        allOffer.accepted = agreements ? true : false;
        allOffer.agreement_id = agreements ? agreements.id : null;
        return allOffer;
      });

      Promise.all(results).then(compeleted => {
        allOffers = compeleted;
        return res.status(200).json(allOffers);
      });
    } else {
      const offers = await models
        .findAllBy("offers", { user_id })
        .orderBy("id", "asc");
      if (offers) {
        res.status(200).json(offers);
      } else {
        res
          .status(404)
          .json({ message: "There was an issue retrieving the offers." });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/offers/:id
// @desc     GET offers
// @Access   Private

route.get("/:id", authenticate, async (req, res) => {
  const id = req.params.id;
  try {
    const offer = await models.findBy("offers", { id });
    if (offer) {
      res.status(200).json(offer);
    } else {
      res.status(404).json({ message: "There was no offer found at that ID." });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/offers
// @desc     POST offers
// @Access   Private
route.post("/", authenticate, async (req, res) => {
  // Make sure to stop any attempts to create any info with IDs or timestamps
  const user_id = req.decoded.id;
  const { budget, name, description, category, currency, status } = req.body;

  if (!budget || !name || !description || !category || !currency || !status) {
    res.status(400).json({ message: "Required information is missing." });
  }

  try {
    const [id] = await models.add("offers", { ...req.body, user_id });
    if (id) {
      const offer = await models.findBy("offers", { id });
      res.status(201).json(offer);
    } else {
      res
        .status(404)
        .json({ message: "There was an issue adding user at that ID." });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
// @route    /api/offers/:id
// @desc     PUT offers
// @Access   Private
route.put("/:id", authenticate, async (req, res) => {
  const id = req.params.id;
  const user_id = req.decoded.id;

  try {
    const offerCheck = await models.findBy("offers", { id, user_id });

    if (!offerCheck)
      return res
        .status(401)
        .json({ message: "You cannot edit someone else's offer" });

    const success = await models.update("offers", id, { ...req.body });

    if (success) {
      // Notify all affiliates that the offer's status has been updated
      if (req.body.hasOwnProperty("status")) {
        const status_text = !req.body.status ? "disabled" : "enabled";
        const affiliates = await models.affiliatesByOfferId(id);
        affiliates.forEach(async affiliate => {
          await models.add("notifications", {
            recipient: affiliate.id,
            type: "offer",
            entity_id: id,
            msg_body: `Offer "${offerCheck.name}" is now ${status_text}`
          });
        });
      }

      const offers = await models
        .findAllBy("offers", { user_id })
        .orderBy("id", "asc");

      res.status(200).json(offers);
    } else {
      res
        .status(404)
        .json({ message: "There was an issue editing the offer at that ID." });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
// @route    /api/offers/:id
// @desc     DELETE offers
// @Access   Private
route.delete("/:id", authenticate, async (req, res) => {
  const id = req.params.id;
  const user_id = req.decoded.id;
  try {
    const offerCheck = await models.findBy("offers", { id, user_id });

    if (!offerCheck)
      return res
        .status(401)
        .json({ message: "You cannot delete someone else's offer" });

    const success = await models.remove("offers", id);
    if (success) {
      res.status(200).json({ message: "User successfully deleted." });
    } else {
      res
        .status(404)
        .json({ message: "There was an issue deleting the user at that ID." });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = route;
