import Post from './post';

export default function Posts({statusMessage, posts}) {//<Post post={post}/>
  return (
    <div>
      {statusMessage ? <h1 id="statusMessage">{statusMessage}</h1> : null}
      <div className="posts">
        {posts.map(post => {
          return <Post key={post.id} post={post}/>
        })}
      </div>
    </div>
    
  );
}

// <% if(statusMessage != undefined){ %>
//   <h1 id="statusMessage"><%= statusMessage%></h1>
//   <% } %>
//   <div class="posts">
//       <% posts.forEach((post, i) => {  %>              <%# for (message of messages) {} %>
//       <a href='/contents/<%= post["id"] %>' class="outerPost">
//           <%
  
//           var images = [post["imageUrl"]];
//           try{
//           var images = JSON.parse(post["imageUrl"]);
//           }catch(e){}
          
//           %>
//           <% if(images.length > 0){ %>
//           <img src='<%= images[0] %>' class="thumbnail">
//           <% } %>
//           <div class="discription">
//               <h2><%= post["title"]; %> </h2>
//               <p><%= post["body"].replace(/\n/g, ''); %> </p>
//           </div>
//           <% if(images.length == 0){ %>
//           <div class="thumbnail"></div>
//           <% } %>
//       </a>
//       <% }); %>
//   </div>
  