# ChatPost-Frontend
The blog that can be posted from LINE Bot.  
This is frontend for ChatPost that provides SSG page and preview page.

- [Demo](#demo)
- [Features](#features)

# Demo
[Frontend Demo](https://foodbankbotdev.web.app/archive)  
[LINE Posting Demo](https://lin.ee/URajtX8)
# Features
Easy interactive blog posting for who are not used to complicated blog management.
Add editor just by inviting to LINE Bot and NO need to create new account.
Just follow bot instruction and submit the post.
Then, email will sent to admin and they can approve or deny the post.
- No need for account
- Interactive posting
- Admin can manage post
- Monthly archive
- Post deletion
- Post update notification
- SSG
# Getting Started
## Setup backend
Backend repository is here.
[Backend repository](https://github.com/Nekodigi/ChatBlog-Backend)
## Install
`yarn install`
## Setup secret
You will need value to access backend.
- .env.local  

```
API_KEY  (same as Backend)
```
- .env

```
NEXT_PUBLIC_PROJECT_ID  (Firebase project id)
NEXT_PUBLIC_API_URL     (Backend url)
```
- Actions secrets 
``` 
FIREBASE_TOKEN          [Guide](https://qiita.com/mziyut/items/2e125a55945f991b0af4)
```
## Usage
### URL list
- static
```
/archive/all/[page]                
/archive/monthly/[YYMM]/[page]   
/post/[id]                       
```
- dynamic
```
/preview?id
/approve?id&hash
/deny?id&hash
```