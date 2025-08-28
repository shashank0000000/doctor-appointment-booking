import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        const dtoken = req.headers.dtoken; // ✅ lowercase
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized, Login Again' })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)

        // ✅ instead of req.body, attach docId directly to req
        req.docId = token_decode.id

        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor
