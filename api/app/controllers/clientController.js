'use strict'

module.exports = (app) => {

    let Client = app.models.clientModel;

    this.post = (function (req, res) {
        let data = new Client(req.body);
        data.save()
            .then(client => {
                res.status(200).json({ 'client': 'client in added successfully' });
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    });

    this.list = (function (req, res) {
        Client.find(function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
            }
        });
    });

    this.get = (function (req, res) {
        let id = req.params.id;
        Client.findById(id, function (err, data) {
            res.json(data);
        });
    });

    this.update = async (req, res) => {
        try {
            let user = await Client.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send(user);
        } catch (err) {
            return res.status(400).send({ error: 'Error updating user' })
        }
    }

    this.delete = (function (req, res) {
        Client.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
            if (err) res.json(err);
            else res.json('Successfully removed');
        });
    });

    return this;
}