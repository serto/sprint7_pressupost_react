
import React, {useState, useEffect} from 'react';
import { ButtonActionStyle } from './buttonAction.style'

const ListPresu = (props) => {

	const [array, setArray] = useState(props.listPresu);
	const initialArray = props.listPresu;

	const arrayList = array.map( (element) => {
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
				<td>{element.date}</td>
			</tr>
		)

	});

	useEffect(() => { 
		console.log('pasa');

	}, [props.listPresu]);

	const orderByName = () => {
		const newOrder = array.sort(function(a, b) {
			if (a.namePresu > b.namePresu) {
					return 1;
			}
			if (a.namePresu < b.namePresu) {
					return -1;
			}});
		console.log(newOrder);
		setArray(newOrder);

	};
	const orderByDate = () => {
		const newOrder = array.sort(function(a, b) {
			if (a.date > b.date) {
					return 1;
			}
			if (a.date < b.date) {
					return -1;
			}});

		console.log(newOrder);
		setArray(newOrder);
	}

	const orderByInit = () => {
		setArray(initialArray);
		console.log(initialArray);
	}

  return (

    <div>
      <h2>Llistat de pressupostos</h2>

			<ButtonActionStyle onClick={orderByName}>Ordenar per nom</ButtonActionStyle>
			<ButtonActionStyle onClick={orderByDate}>Ordenar per data</ButtonActionStyle>
			<ButtonActionStyle onClick={orderByInit}>Reinicialitzar llista</ButtonActionStyle>

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

				{arrayList}

  		</table>
    </div>
    );

}

export default ListPresu;