export default function AddATitle({ title, setTitle }: any) {
   const handleTitle = (e: any) => {
      const title = e.target.value;
      setTitle(title);
   };

   return (
      <div className="flex flex-col my-2">
         <h1 className="text-3xl text-dark josefin-sans">Add a title:</h1>
         <input
            onChange={handleTitle}
            value={title}
            placeholder="Title"
            className="input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2 my-2"
         ></input>
      </div>
   );
}
