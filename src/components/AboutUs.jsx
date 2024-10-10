import React from 'react';
import './AboutUs.css';

function AboutUs () {
    return (
        <div id='AboutUs'>
            <h2 className='aboutUsTitle'>Somos a DNC — Transformamos desafios em oportunidades através de uma abordagem data-driven.</h2>
            <div className='cards'>
                <div className='card1'>
                    <h3>Aumento da <br />receita</h3>
                    <p>Nosso objetivo é impulsionar seu crescimento de forma rápida e sustentável. Identificamos e eliminamos ineficiências nos seus processos, implementamos estratégias de marketing digital que ampliam seu alcance e engajamento, e usamos dados para tomar decisões informadas que impulsionam seu sucesso. Com nossas soluções, você verá resultados mensuráveis em termos de produtividade, receita e participação de mercado, colocando sua empresa à frente da concorrência.</p>
                </div>
                <div className='card2'>
                    <h3>Captação de <br/> novos clientes</h3>
                    <p>Nossa abordagem começa com uma análise detalhada do seu negócio, identificando pontos fortes, fraquezas, oportunidades e ameaças. A partir daí, nossos especialistas elaboram uma estratégia digital personalizada que alinha tecnologia, processos e pessoas para atingir seus objetivos específicos. Seja aumentando a eficiência operacional, melhorando a experiência do cliente ou impulsionando as vendas, oferecemos um plano de ação claro e eficaz que maximiza seu potencial de crescimento.</p>
                </div>
                <div className='card3'>
                    <h3>Corte de <br />custos</h3>
                    <p>A transformação digital é uma jornada contínua, e estamos comprometidos em apoiá-lo em cada passo do caminho. Oferecemos suporte técnico dedicado, treinamento para sua equipe e acompanhamento constante para garantir que as soluções implementadas continuem a atender suas necessidades à medida que seu negócio cresce e evolui. Nosso compromisso é com resultados duradouros, ajudando sua empresa a se adaptar e prosperar em um cenário digital em constante mudança.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs