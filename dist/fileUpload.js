import { Client } from "@notionhq/client";
export const uploadImage = async (apiId, pageId, file) => {
    const client = new Client({ auth: apiId });
    const url = await requestImageUrl(client);
    if (url.success) {
        const uploadRes = await uploadToURL(url.response?.id, client, file);
        if (uploadRes.success) {
            const finalRes = await appendToPage(uploadRes.response?.id, pageId, client);
            if (finalRes.success) {
                return { success: true };
            }
        }
        return { success: false };
    }
    return { success: false };
};
const requestImageUrl = async (client) => {
    try {
        const res = await client.fileUploads.create({});
        console.log(res);
        return { success: true, response: res };
    }
    catch (error) {
        console.log(error);
        return { success: false };
    }
};
const uploadToURL = async (file_upload_id, client, imageBlob) => {
    try {
        const res = await client.fileUploads.send({
            file_upload_id: file_upload_id,
            file: {
                data: imageBlob
            }
        });
        console.log(res);
        return { success: true, response: res };
    }
    catch (error) {
        console.log(error);
        return { success: false };
    }
};
const appendToPage = async (file_upload_id, page_id, client) => {
    try {
        const res = await client.blocks.children.append({
            block_id: page_id,
            children: [
                {
                    type: "image",
                    image: {
                        caption: [],
                        type: "file_upload",
                        file_upload: {
                            id: file_upload_id
                        }
                    }
                }
            ]
        });
        console.log(res);
        return { success: true, response: res };
    }
    catch (error) {
        console.log(error);
        return { success: false };
    }
};
//# sourceMappingURL=fileUpload.js.map