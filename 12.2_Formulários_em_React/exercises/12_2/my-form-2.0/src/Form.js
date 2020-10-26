import React from 'react';
import { connect } from 'react-redux'
import { addInput } from './redux/actionCreators'

function Form ({addInput}) { 
	return (
	<div>
		<h1>Formulário em React</h1>
		<label>
			Nome
			<input name='name' type='text' onChange={() => addInput()}>	
			</input>
		</label>
	</div> 
	)
}

const mapStateToProps = (state) => ({
	name: state.reducer.form.name,
})

const mapDispatchToProps = (dispatch) => ({
	addInput: (name, value) => dispatch(addInput(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);