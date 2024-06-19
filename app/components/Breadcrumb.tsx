type breadCrumbPropType = {
   links: string[];
};

export default function Breadcrumb({ links }: Readonly<breadCrumbPropType>) {
   return (
      <div className="flex text-sm truncate breadcrumbs lg:justify-start justify-center overflow-x-visible">
         <ul>
            {links.map((link, index) => {
               return (
                  <li className="truncate max-w-[150px] lg:max-w-full" key={index + index}>
                     {link}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
