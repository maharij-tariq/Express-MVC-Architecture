
import { users } from '../model/user.js';

export const fetchedData = (req, res) => {
    const id = parseInt(req.params.id);

    const findUser = users.find(user => user.id === id);

    if (findUser) {
        res.status(200).render('index', { index: findUser });
    } else {
        res.status(404).send('PAGE NOT FOUND');
    }
};

