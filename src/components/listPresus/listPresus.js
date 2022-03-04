
import React, {useState, useEffect} from 'react';

const ListPresu = (props) => {

  const [array, setArray] = useState(props.listPresu);

  useEffect(() => {
    setArray(props.listPresu);
  }, [props.listPresu]);


  return (

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
					<th>Data</th>
  			</tr>

				{ (array && array.length>0) ? 
					array.map( (element, key) => {
            return (
              <tr key={key}>
                <td>{element.namePresu}</td>
                <td>{element.nameClient}</td>
                <td><input type="checkbox" checked={element.web} readOnly/></td>
                <td>{element.numPages}</td>
                <td>{element.numLangs}</td>
                <td><input type="checkbox" checked={element.seo} readOnly/></td>
                <td><input type="checkbox" checked={element.ads} readOnly/></td>
                <td>{element.presu}</td>
                <td>{element.date}</td>
              </tr>
            )})
					: 
					<tr><td colSpan="9"><h4> NO HI HAN PRESSEUPOSTOS </h4></td></tr>
				}

  		</table>

    );

}

export default ListPresu;