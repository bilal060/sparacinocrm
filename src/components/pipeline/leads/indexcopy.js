import React, { useState, useEffect, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Search from "../../../images/search";
import { PipelineCard } from "../../card";
import { Dropdown } from "../../dropdown";
import { PipelineHeading } from "../../heading";
import { categories, staticTasks } from "./const";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
};

const Column = ({ children, className, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item) => {
      console.log(item, "messages-1");

      const { currentColumnName } = item;
      return currentColumnName === title;
    },
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(188,251,255)";
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
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const MovableItem = ({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems,
  children,
}) => {
  const ref = useRef(null);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      console.log(item, "item");
      console.log(monitor, "monitor");

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

  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          category: e.name === currentItem.name ? columnName : e.column,
        };
      });
    });
  };

  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: { index, name, currentColumnName, type: "box" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(item, "dropResult-dropResult");
    },
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="movable-item"
      style={{ ...style, opacity }}
      // data-testid={`box`}
    >
      {children}
    </div>
  );
};

export default function PipelineLeadscopy() {
  const [tasks, setTasks] = useState(staticTasks);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = tasks[dragIndex];
    console.log(dragItem, "dragItem-dragItem");
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
      .filter((task) => task.category === category)
      .map((task, index) => (
        <MovableItem
          key={index}
          name={task.name}
          currentColumnName={task.category}
          setItems={setTasks}
          index={task.id}
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
                    title={category}
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
