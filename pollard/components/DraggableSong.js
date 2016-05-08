import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const songSource = {
  beginDrag(props) {
    return {
      idx: props.idx
    };
  }
};

const songTarget = {
  hover(props, monitor, component) {
    const dragIdx = monitor.getItem().idx;
    const hoverIdx = props.idx;

    // Don't replace items with themselves
    if (dragIdx === hoverIdx) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIdx < hoverIdx && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIdx > hoverIdx && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    console.log('DEBUG: moving song from: ' + dragIdx + ' to ' + hoverIdx);


    // props.moveCard(dragIdx, hoverIdx);
    props.moveSong(dragIdx, hoverIdx);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive idx searches.
    monitor.getItem().idx = hoverIdx;
  }
};

/*
export default class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired
  };

  render() {
    const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity }}>
        {text}
      </div>
    ));
  }
*/

class DraggableSong extends Component {
  render() {
    const {
      children,
      connectDragSource,
      connectDropTarget,
      isDragging,
    } = this.props;

    const opacity = isDragging ? 0 : 1;
    console.log('isDragging: ' + isDragging);

    return connectDragSource(connectDropTarget(
      <div style={{ opacity }}>
        { children }
      </div>
    ));
  }


}

export default DropTarget('song', songTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DragSource('song', songSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
}))(DraggableSong));
