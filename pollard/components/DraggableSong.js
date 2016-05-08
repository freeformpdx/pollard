import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

import Song from './Song';

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
    props.moveSong(dragIdx, hoverIdx);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive idx searches.
    monitor.getItem().idx = hoverIdx;
  }
};

class DraggableSong extends Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      ...rest,
    } = this.props;


    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{ opacity }}>
        <Song {...rest} />
      </div>
    ));
  }
}

export default DragSource('song', songSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DropTarget('song', songTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DraggableSong));
