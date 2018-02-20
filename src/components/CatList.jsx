import React, { Component } from 'react';
import Cat from './Cat.jsx';
import update from 'immutability-helper';


class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected: 0,
      cats: this.props.cats
    };
  }

  changeCat(i) {
    this.setState( {
      selected: i
    })
  }
  addClicks(i) {
    this.setState( {
      cats: update(this.state.cats, {
        [i]: { clicks: { $set: this.state.cats[i].clicks + 1} }
      })
    })
  }
  edit(i) {
    const newName = window.prompt('Name?', this.state.cats[i].name);
    this.setState( {
      cats: update(this.state.cats, {
        [i]: { name: { $set: newName }}
      })
    })
  }

  render() {
    
    const selectedCat = this.state.cats[this.state.selected];

    return (
      <section>
      <div className="selected-cat">
        <Cat {...selectedCat}
            //  name={selectedCat.name} 
            //  img={selectedCat.img} 
            //  clicks={selectedCat.clicks} 
             onClick={() => this.addClicks(this.state.selected)}
             onEdit={() => this.edit(this.state.selected)}/>
      </div>
      <div className="cat-list">{ this.state.cats.map((cat, i) => (
        <Cat {...cat} 
             onClick={() => this.changeCat(i)} 
             onEdit={() => this.edit(i)}/>
      )) }</div>
      </section>
    );
  }
}

export default CatList;