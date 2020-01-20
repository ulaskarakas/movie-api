# movie-api
NodeJS Movie API

<h2>Movies</h2>

<table>
  <tr>
    <th style="text-align:center">Route</th>
    <th style="text-align:center">HTTP<br>Verb</th>
    <th style="text-align:center">POST body</th>
    <th style="text-align:center">Description</th>
  </tr>
  <tr>
    <td>/api/movies</td>
    <td>GET</td>
    <td>Empty</td>
    <td>List all movies.</td>
  </tr>
  <tr>
    <td>/api/movies</td>
    <td>POST</td>
    <td>{'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 }</td>
    <td>Create a new movie.</td>
  </tr>
  <tr>
    <td>/api/movies/:movie_id</td>
    <td>GET</td>
    <td>Empty</td>
    <td>Get a movie.</td>
  </tr>
  <tr>
    <td>/api/movies/:movie_id</td>
    <td>PUT</td>
    <td>{'name':'foo', 'surname':'bar'}</td>
    <td>Update a movie with new info.</td>
  </tr>
  <tr>
    <td>/api/movies/:movie_id</td>
    <td>DELETE</td>
    <td>Empty</td>
    <td>Delete a movie.</td>
  </tr>
  <tr>
    <td>/api/movies/top10</td>
    <td>GET</td>
    <td>Empty</td>
    <td>Get the top 10 movies.</td>
  </tr>
  <tr>
    <td>/api/movies/between/:start_year/:end_year</td>
    <td>GET</td>
    <td>Empty</td>
    <td>Movies between two dates.</td>
  </tr>
</table>

<h2>Directors</h2>

<table>
  <tr>
    <th style="text-align:center">Route</th>
    <th style="text-align:center">HTTP<br>Verb</th>
    <th style="text-align:center">POST body</th>
    <th style="text-align:center">Description</th>
  </tr>
  <tr>
    <td>/api/directors</td>
    <td>GET</td>
    <td>Empty</td>
    <td>List all directors.</td>
  </tr>
  <tr>
    <td>/api/directors</td>
    <td>POST</td>
    <td>{ name: 'foo', surname:'bar', bio:'lorem ipsum' }</td>
    <td>Create a new director.</td>
  </tr>
  <tr>
    <td>/api/directors/:director_id</td>
    <td>GET</td>
    <td>Empty</td>
    <td>Get a director.</td>
  </tr>
  <tr>
    <td>/api/directors/:director_id</td>
    <td>PUT</td>
    <td>{'name':'foo', 'surname':'bar', 'bio': 'lorem'}</td>
    <td>Update a director with new info.</td>
  </tr>
  <tr>
    <td>/api/directors/:director_id</td>
    <td>DELETE</td>
    <td>Empty</td>
    <td>Delete a director.</td>
  </tr>
  <tr>
    <td>/api/directors/:director_id/best10movie</td>
    <td>GET</td>
    <td>Empty</td>
    <td>The director's top 10 movies.</td>
  </tr>
</table>

