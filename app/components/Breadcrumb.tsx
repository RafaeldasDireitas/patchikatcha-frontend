type breadCrumbPropType = {
   links: string[];
};

export default function Breadcrumb({ links }: Readonly<breadCrumbPropType>) {
   return (
      <div className="flex text-sm breadcrumbs lg:justify-start justify-center quicksand-light overflow-x-visible">
         <ul>
            {links.map((link, index) => {
               return <li key={index + index}>{link}</li>;
            })}
         </ul>
      </div>
   );
}
