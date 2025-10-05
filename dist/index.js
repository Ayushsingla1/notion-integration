import express from "express";
import cors from "cors";
import { uploadImage } from "./fileUpload.js";
import multer from "multer";
const app = express();
const upload = multer();
app.use(express.json());
app.use(cors());
app.post('/uploadFile', upload.single('file'), async (req, res) => {
    try {
        console.log(req.body);
        const { apiKey, pageId } = req.body;
        const file = req.file;
        //@ts-ignore
        const blob = new Blob([file?.buffer], { type: req.file?.mimetype });
        const response = await uploadImage(apiKey, pageId, blob);
        console.log(response);
        if (response.success) {
            return res.status(200).json({ success: true });
        }
        else {
            return res.status(404).json({ success: false });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ success: false });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map