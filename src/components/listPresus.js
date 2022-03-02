
import React, {useState, useEffect} from 'react';

const ListPresu = (props) => {

	const [array, setArray] = useState(props.listPresu);

	const presuList = array.map( (element) => {
		return (
			<tr key={element.namePresu}>
				<td>{element.namePresu}</td>
				<td>{element.nameClient}</td>
				<td><input type="checkbox" checked={element.web} /></td>
				<td>{element.numPages}</td>
				<td>{element.numLangs}</td>
				<td><input type="checkbox" checked={element.seo} /></td>
				<td><input type="checkbox" checked={element.ads} /></td>
				<td>{element.presu}</td>
			</tr>
		)

	});

	useEffect(() => { 
		console.log('pasa');
		setArray(props.listPresu);
	}, [props.listPresu]);
/*

*/
  return (

    <div>
      <h2>Llistat de pressupostos</h2>

      <table>
        
				<tr>
          <th>Nom Pressupost</th>
          <th>Nom Client</th>
          <th>Pàgina web</th>
          <th>Num pàgines</th>
          <th>Num idiomes</th>
          <th>Consultoria SEO</th>
          <th>Google Ads</th>
					<th>Preu</th>
  			</tr>

				{presuList}

  		</table>
    </div>
    );

}

export default ListPresu;