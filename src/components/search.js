import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
// import "./tree-node.scss";
// import "react-sortable-tree/styles.css" from "react-sortable-tree";
// import SortableTree from "../src";
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';
// import styles from "./styles.css";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";

export default class Search extends Component {
  constructor(props) {
    super(props);

    const title = "Hay";

    // For generating a haystack (you probably won't need to do this)
    const getStack = (left, hasNeedle = false) => {
      if (left === 0) {
        return hasNeedle ? { title: "Needle" } : { title };
      }

      return {
        title,
        children: [
          {
            title,
            children: [getStack(left - 1, hasNeedle && left % 2), { title }]
          },
          { title },
          {
            title,
            children: [
              { title },
              getStack(left - 1, hasNeedle && (left + 1) % 2)
            ]
          }
        ]
      };
    };

    this.state = {
      searchString: "",
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [
        {
          title: "Haystack",
          children: [
            getStack(3, true),
            getStack(3),
            { title },
            getStack(2, true)
          ],
          expanded: true
        }
      ]
    };
  }


  render() {
    const { searchString, searchFocusIndex, searchFoundCount } = this.state;

    // Case insensitive search of `node.title`
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0
      });

    return <div className="styles.content">
        <h2>Find the needle!</h2>
        <form style={{ display: "inline-block" }} onSubmit={event => {
            event.preventDefault();
          }}>
          <input id="find-box" type="text" placeholder="Search..." style={{ fontSize: "1rem" }} value={searchString} onChange={event => this.setState(
                { searchString: event.target.value }
              )} />

          <button type="button" disabled={!searchFoundCount} onClick={selectPrevMatch}>
            &lt;
          </button>

          <button type="submit" disabled={!searchFoundCount} onClick={selectNextMatch}>
            &gt;
          </button>

          <span>
            &nbsp;
            {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
            &nbsp;/&nbsp;
            {searchFoundCount || 0}
          </span>
        </form>

        <div style={{ height: 300 }}>
          <SortableTree theme={FileExplorerTheme} treeData={this.state.treeData} 
           onChange={treeData => this.setState(
                { treeData }
              )} // the title and subtitle values. // This is optional, and defaults to a case sensitive search of // Custom comparison for matching during search. //
            // see `defaultSearchMethod` in https://github.com/frontend-collective/react-sortable-tree/blob/master/src/utils/default-handlers.js
            searchMethod={customSearchMethod} searchQuery={searchString // The query string used in the search. This is required for searching. //
            } searchFocusOffset={searchFocusIndex // match and scroll to it. This is optional. // When matches are found, this property lets you highlight a specific //
            } // Here I just use it to note how many matches were found. // including their `node`s, `treeIndex`es, and `path`s // This callback returns the matches from the search, //
            // This is optional, but without it, the only thing searches
            // do natively is outline the matching nodes.
            searchFinishCallback={matches => this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0
              })} />
        </div>
      </div>;
  }
}
