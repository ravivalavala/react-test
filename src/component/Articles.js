import React, {useState, useEffect, useReducer} from 'react';

function Articles({articles,upVoteBut, dateBut}) {

  const [sortedArticles, setSortedArticles] = useState(articles)
  const [state, dispatch] = useReducer(reducer, { upvotes: 'up', date: 'up' });
  
  function reducer(state, action) {
    console.log(state)
    if (action.type === 'sortByUpvotes') {
      if(state.upvotes === 'up') {
        setSortedArticles([...articles.sort((a, b) => b.upvotes - a.upvotes)])
        state.upvotes = 'down'
        return state;
      } else {
        setSortedArticles([...articles.sort((a, b) => a.upvotes - b.upvotes)])
        state.upvotes = 'up'
        return state;
      }
    } else if (action.type === 'sortByDate') {
      if(state.date === 'up') {
        setSortedArticles([...articles.sort((a, b) => new Date(b.date) - new Date(a.date))])
        state.date = 'down'
        return state;
      } else {
        setSortedArticles([...articles.sort((a, b) => new Date(a.date) - new Date(b.date))])
        state.date = 'up'
        return state;
      }
    } else {
      throw Error('Unknown action.');
    }
  }
  
  useEffect(() => {
   
      upVoteBut.current.addEventListener("click", () => { dispatch({ type: 'sortByUpvotes' })}, true);
      dateBut.current.addEventListener("click", () => { dispatch({ type: 'sortByDate' })}, false);

      return () => {
        upVoteBut.current.removeEventListener("click", () => { dispatch({ type: 'sortByUpvotes' })}, false)
        dateBut.current.removeEventListener("click", () => { dispatch({ type: 'sortByDate' })}, false)
      } 
    
   }, [])

  
  return (
      <div className="card w-50 mx-auto">
          <table>
              <thead>
              <tr>
                  <th>Title</th>
                  <th>Upvotes</th>
                  <th>Date</th>
              </tr>
              </thead>
              <tbody>

                  { sortedArticles && sortedArticles.map((article) => {
                    return  <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">{article.title}</td>
                    <td data-testid="article-upvotes">{article.upvotes}</td>
                    <td data-testid="article-date">{article.date}</td>
                    </tr>
                  })             
                  }
                  
              </tbody>
          </table>
      </div>
  );

}

export default Articles;
