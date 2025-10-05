// import { Client } from "@notionhq/client";
// import { configDotenv } from "dotenv";
// configDotenv();
// import fs from "fs";
// import { Blob } from "buffer";

// const NOTION_SECRET = process.env.NOTION_API_KEY;

// if(!NOTION_SECRET) throw new Error("no api key found");

// const client = new Client({ auth: NOTION_SECRET });

// const createDb = async(pageId : string, title : string) => {

//     if(!pageId || pageId.length !== 32) {
//         console.log("pageId invalid");
//         return;
//     };
//     try {
//         const res = await client.databases.create({
//             parent : {
//                 type : "page_id",
//                 page_id : pageId
//             },
//             title : [
//                 {
//                     type : "text",
//                     text : {
//                         content : title
//                     }
//                 }
//             ],
//             initial_data_source: {
//                 properties: {
//                   Name: {
//                     title: {},
//                   },
//                 },
//               },
//         })

//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }


// // await createDb(process.env.NOTION_PAGE_ID,"screenshotDb2");


// // const dataSourceId = ""


// const createPage = async(dataSourceId : string , header : string,  pageName : string) => {
//     try {
//         const res = await client.pages.create({
//             parent : {
//                 type : "data_source_id",
//                 data_source_id : dataSourceId
//             },
//             properties : {
//                 Name : {
//                     title : [
//                         {
//                             text : {
//                                 content : pageName
//                             }
//                         }
//                     ]
//                 }
//             },
//             children : [
//                 {
//                     object : "block",
//                     heading_2 : {
//                         rich_text : [
//                             {
//                                 text : {
//                                     content : header
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             ]
//         })

//         console.log(res);

//     } catch (error) {
//         console.log(error);
//     }
// }

// // await createPage(dataSourceId,"DEKHI JAYEGI","first Page")


// const dataBaseId = "";

// const createBlock = async(pageId : string, content : string) => {

//     try {
//         const res = await client.blocks.children.append({
//             block_id : pageId,
//             children : [
//                 {
//                     paragraph : {
//                         rich_text : [
//                             {
//                                 text : {
//                                     content : content
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             ]
//         })

//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }

// }

// // await createBlock(process.env.NOTION_PAGE_ID,"It was always me vs me");

// const requestImageUrl = async() => {
//     try {
//         const res = await client.fileUploads.create({});
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }



// const imageBuffer = fs.readFileSync("/Users/ayushsingla/Figure_1_output.png");
// const imageBlob = new Blob([imageBuffer], { type: 'image/png' });


// console.log(imageBlob);

// const uploadToURL = async(file_upload_id : string) => {
//     try {
//         const res = await client.fileUploads.send({
//             file_upload_id : file_upload_id,
//             file : {
//                 data : imageBlob
//             }
//         })

//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const appendToPage = async(file_upload_id : string, page_id : string) => {
//     try {
        
//         const res = await client.blocks.children.append({
//             block_id : page_id,
//             children : [
//                 {
//                     image : {
//                         caption : [],
//                         type : "file_upload",
//                         file_upload : {
//                             id : file_upload_id
//                         }
//                     }
//                 }
//             ]
//         })
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// await appendToPage("",process.env.NOTION_PAGE_ID!);