import React, { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Search from "../../../images/search";
import { PipelineCard } from "../../card";
import { Dropdown } from "../../dropdown";
import "../../../assets/css/layout.css";
import { categories, staticTasks } from "./const";

const style = {
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
};

const MovableItem = ({
  name,
  index,
  category,
  moveCardHandler,
  setItems,
  children,
}) => {
  const ref = useRef(null);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "box",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCardHandler(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const changeItemColumn = (currentItem, category) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          category: e?.id === currentItem?.index ? category : e?.category,
        };
      });
    });
  };

  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: { index, name, category, type: "box" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      const { category } = dropResult;

      if (dropResult && category) {
        changeItemColumn(item, category);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="movable-item"
      style={{ ...style, opacity }}
      data-testid={`box`}
    >
      {children}
    </div>
  );
};

const Column = ({ children, className, category }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "box",
    drop: () => ({ category }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item) => {
      const { currentColumnName } = item;
      return true;
    },
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(246,247,248)";
      } else if (!canDrop) {
        return "rgb(255,188,188)";
      }
    } else {
      return "";
    }
  };

  return (
    <div
      ref={drop}
      className={className}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <h1 className="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3 height-36">{category}</h1>
      {children}
    </div>
  );
};

export default function PipelineLeadscopy() {
  const [tasks, setTasks] = useState(staticTasks);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = tasks[dragIndex];
    if (dragItem) {
      setTasks((prevState) => {
        const coppiedStateArray = [...prevState];
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (category) => {
    return tasks
      .filter((task) => task?.category === category)
      .map((task, index) => (
        <MovableItem
          key={index}
          name={task?.name}
          category={task?.category}
          setItems={setTasks}
          index={task?.id}
          moveCardHandler={moveCardHandler}
        >
          <PipelineCard
            status={task.priority}
            name={task.name}
            date1={task.lastupdate}
            date2={task.Lastcontacted}
            city={task.city}
            properties={task.properties}
            date3={task.value}
          />
        </MovableItem>
      ));
  };

  return (
    <>
      <div class="tab-content " id="pills-tabContent">
        <div
          className="tab-pane fade in active"
          id="pipeline-leads-pill"
          role="tabpanel"
          aria-labelledby="pipeline-leads-pill-tab"
        >
          <main className="custom-main-content mt-2 pt-0">
            <h1 className="custom-heading">Leads</h1>

            <div className="d-inline-flex align-items-end">
              <div className="pipeline-item  d-flex align-items-end">
                <div className="position-relative custom-search-filter w-100">
                  <input
                    type="text"
                    placeholder="Search this board"
                    className="w-100"
                  />
                  <div class="position-absolute custom-search-icon">
                    <Search />
                  </div>
                </div>
              </div>
              <div className="pipeline-item ">
                <Dropdown label="City" option1="Barkely" option2="Dubai" />
              </div>
              <div className="pipeline-item"></div>
              <div className="pipeline-item">
                <Dropdown label="Sort" option1="Last Updated" option2="Dubai" />
              </div>
            </div>
            <DndProvider backend={HTML5Backend}>
              <div className="d-inline-flex mt-4 pt-3 mb-5">
                {categories.map((category, index) => (
                  <Column
                    category={category}
                    className="column do-it-column"
                    key={category}
                  >
                    {returnItemsForColumn(category)}
                  </Column>
                ))}
              </div>
            </DndProvider>
          </main>
        </div>
      </div>
    </>
  );
}
