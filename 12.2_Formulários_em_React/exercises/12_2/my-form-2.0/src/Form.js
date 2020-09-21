import React from 'react';

class Form extends React.Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)

		this.state = {
			name: "",
			mail: "",
			cpf: "",
			adress: "",
			city: "",
			state: "",
			type: "",
			resume: "",
			role: "",
			roleDescription: "",
		}
	}

	handleChange({ target }) {
		const {name} = target

		this.setState({
			[name]: target.value
		})
	}

	showContent = () => {
		[Object.values(this.state)].map((item, key) => {
			return (
			<p>{item}</p>
			)
		})
	}

	clearContent = () => {
	}

	render() {
		return (
			<div>
				<h1>Formulário em React</h1>
				<fieldset >
					<label>
						Nome
					<input name='name' type='text' onChange={this.handleChange}></input>
					</label> 
					<br />
					<label>
						E-mail
					<input name='mail' type='text' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						CPF
					<input name='cpf' type='text' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						Endereço
					<input name='adress' type='text' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						Cidade
					<input name='city' type='text' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						Estado
					<input name='state' type='ComboBox' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						Tipo
					<input name='type' type='radio' onChange={this.handleChange}></input>
					</label>
				</fieldset>

				<fieldset>
				<label>
						Resumo do Currículo
					<textarea name='resume' type='textArea' onChange={this.handleChange}></textarea>
					</label>
					<br />
					<label>
						Cargo
					<input name='role' type='text' onChange={this.handleChange}></input>
					</label>
					<br />
					<label>
						Descrição do Cargo
						<textarea name='roleDescription' type='textArea' onChange={this.handleChange}></textarea>
					</label>
				</fieldset>

				<button onClick={this.showContent}>Submeter</button>
				{/* exibir aqui */}
				<button onClick={this.clearContent}>Limpar</button>
			</div>
		)
	}
}

export default Form;