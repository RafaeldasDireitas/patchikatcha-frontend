type breadCrumbPropType = {
   links: string[];
};

export default function Breadcrumb({ links }: breadCrumbPropType) {
   return (
      <div className="flex text-sm breadcrumbs lg:justify-start justify-center quicksand-light overflow-x-visible">
         <ul>
            {links.map((link, index) => {
               return <li key={index}>{link}</li>;
            })}
         </ul>
      </div>
   );
}
