import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input. 'data' should be an array."
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    let highestAlphabet = [];
    if (alphabets.length > 0) {
        const sortedAlphabets = alphabets.map(a => a.toUpperCase()).sort();
        const highest = sortedAlphabets[sortedAlphabets.length - 1];
        highestAlphabet = alphabets.filter(a => a.toUpperCase() === highest);
    }

    res.json({
        is_success: true,
        user_id: "rohit_choudhury_01012000",
        email: "rohit@chitkara.edu.in",
        roll_number: "CHITK123",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

router.get('/', (req, res) => {
    res.json({ operation_code: 1 });
});

export default router;
