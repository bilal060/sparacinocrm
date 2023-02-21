
// export const Box = ({ name, children }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "box",
//     item: { name },
//     end: (item, monitor) => {
//       const dropResult = monitor.getDropResult();
//       if (item && dropResult) {
//         alert(`You dropped ${item.name} into ${dropResult.name}!`);
//       }
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//       handlerId: monitor.getHandlerId(),
//     }),
//   }));

//   const opacity = isDragging ? 0.4 : 1;
//   return (
//     <div
//       ref={drag}
//       style={{ ...style, opacity }}
//       data-testid={`box`}
//       className="pipeline-item"
//     >
//       {children}
//     </div>
//   );
// };

 // if (dropResult) {
      //   const { name } = dropResult;
      //   // const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;

      //   let newCategory = categories.find(
      //     (projCategory) => projCategory == name
      //   );

      //   if (newCategory) {
      //     changeItemColumn(item, newCategory);
      //   }
      //   // switch (name) {
      //   //   case IN_PROGRESS:
      //   //     changeItemColumn(item, IN_PROGRESS);
      //   //     break;
      //   //   case AWAITING_REVIEW:
      //   //     changeItemColumn(item, AWAITING_REVIEW);
      //   //     break;
      //   //   case DONE:
      //   //     changeItemColumn(item, DONE);
      //   //     break;
      //   //   case DO_IT:
      //   //     changeItemColumn(item, DO_IT);
      //   //     break;
      //   //   default:
      //   //     break;
      //   // }
      // }

      
// {
//   id: 11,
//   priority: "heigh",
//   name: "Mrs. Marah Williamson",
//   lastupdate: "Last updated:22 Dec, 2022",
//   Lastcontacted: "Last Contacted:22 Dec, 2022",
//   city: "Dubai",
//   Properties: "5",
//   value: "22 Dec, 2022",
//   category: "Signing listing agrement confirmed",
// },
// {id: 1, name: 'Item 1', column: DO_IT},
//     {id: 2, name: 'Item 2', column: DO_IT},
//     {id: 3, name: 'Item 3', column: DO_IT},
//     {id: 4, name: 'Item 4', column: DO_IT},

//{
//     DO_IT: 'Do it',
//     IN_PROGRESS: 'In Progress',
//     AWAITING_REVIEW: 'Awaiting review',
//     DONE: 'Done',
// }

//import { COLUMN_NAMES } from "./cardcategory";
