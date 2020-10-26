import React from 'react';
import { connect } from 'react-redux'
import { addInput } from './redux/actionCreators'

function Form ({input}) { 
	return (
	<div>
		<h1>Formulário em React</h1>
		<label>
			Nome
			<input name='name' type='text' onChange={(ev) => input(ev.target.name, ev.target.value)}>	
			</input>
		</label>
		<br />
		<label>
			E-mail
			<input name='mail' type='text' onChange={(ev) => input(ev.target.name, ev.target.value)}>	
			</input>
		</label>
	</div> 
	)
}

const mapStateToProps = (state) => ({
	name: state.reducer.form.name,
	mail: state.reducer.form.mail,
})

const mapDispatchToProps = (dispatch) => ({
	input: (name, value) => dispatch(addInput(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);