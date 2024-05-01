type breadCrumbPropType = {
   links: string[];
};

export default function Breadcrumb({ links }: breadCrumbPropType) {
   return (
      <div className="text-sm breadcrumbs">
         <ul>
            {links.map((link, index) => {
               return <li key={index}>{link}</li>;
            })}
         </ul>
      </div>
   );
}
