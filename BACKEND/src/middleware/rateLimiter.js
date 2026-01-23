

import ratelimiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {

        // You can customize the key based on user IP or user ID for more granular control
        const {success} = await ratelimiter.limit("myrate_limiter_key");

        if (!success)  {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        } else {
            next();
        }
        
    } catch (error) {
        console.error("Rate limiter error:", error);
        next(error)
        
    }
}

export default rateLimiter