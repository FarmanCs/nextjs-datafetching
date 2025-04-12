async function getUserPost(userId) {
   await new Promise((wait) => setTimeout(wait, 1000))

   const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
   return result.json()

}

async function getUSerAlbums(userId) {
   await new Promise((wait) => setTimeout(wait, 2000))
   const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
   return result.json()

}

export default async function UserProfile({ params }) {
   const { id } = await params
   const postData = getUserPost(id)
   const albumsData = getUSerAlbums(id)

   const [posts, albums] = await Promise.all([postData, albumsData])
   return (
      <div className="p-4 max-w-7xl mx-auto">
         <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <h2 className="text-2xl font-bold mb-4">Posts</h2>
               <div className="space-y-4">
                  {posts.map((post) => (
                     <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                           {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                           {post.body}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <div>
               <h2 className="text-2xl font-bold mb-4">Albums</h2>
               <div className="space-y-4">
                  {albums.map((album) => (
                     <div key={album.id} className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-700">{album.title}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}