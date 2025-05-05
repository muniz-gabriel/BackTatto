import spp from './App.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 4000
applescript.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`CRTL + Click on the link to open in the browser 
    http://localhost:${PORT}`)
})