import './Rodape.css'

const Rodape = () => {
	return (<footer className='footer'>
		<section>
			<ul>
				<li>
					<a href='facebook.com' tarfet='_blanck'>
						<img src='/imagens/fb.png' alt='Facebook' />
					</a>
				</li>
				<li>
					<a href='twitter.com' tarfet='_blanck'>
						<img src='/imagens/tw.png' alt='Twitter' />
					</a>
				</li>
				<li>
					<a href='instagram.com' tarfet='_blanck'>
						<img src='/imagens/ig.png' alt='Instagram' />
					</a>
				</li>
			</ul>
		</section>
		<section>
			<img src='/imagens/logo.png' alt='' />
		</section>
		<section>
			<p> Desenvolvido por Alura </p>
		</section>
	</footer>)
}

export default Rodape