import React, { Component } from 'react';

export default class DraggableSong extends Component {

	dragStart(event) {
		const data = {
			idx: this.props.idx
		};

		event.dataTransfer.setData('text', JSON.stringify(data));
	}

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {

    event.preventDefault();

    var data;

    try {
      data = JSON.parse(event.dataTransfer.getData('text'));
    } catch (e) {
			console.error("COULD NOT READ DRAG DATA TRANSFER");
      return;
    }

		this.props.onMoveSong(data.idx, this.props.idx);
  }

  render() {
		return (
			<div
				draggable='true'
				onDragStart={ (e) => this.dragStart(e) }
				onDragOver={ (e) => this.dragOver(e) }
				onDrop={ (e) => this.drop(e) } >
				{ this.props.children }
			</div>
		);
	}

}
