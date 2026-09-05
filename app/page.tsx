import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  ArrowDown,
  ArrowUpRight,
  Bird,
  Droplets,
  Fence,
  Leaf,
} from 'lucide-react';
const categories = [
  {
    id: 'bebedouros',
    name: 'Bebedouros',
    description: 'Água fresca faz parte de todo bom cuidado.',
    icon: Droplets,
    products: [
      'Bebedouro tubular 50 ml',
      'Bebedouro tubular 100 ml',
      'Bebedouro tubular 200 ml',
      'Bebedouro automático',
      'Bebedouro de bico curto',
      'Bebedouro de bico largo',
      'Bebedouro com presilha',
      'Bebedouro para voadeira',
      'Kit com 2 bebedouros',
      'Kit com 4 bebedouros',
    ],
  },
  {
    id: 'poleiros',
    name: 'Poleiros',
    description: 'Um lugar para descansar entre um canto e outro.',
    icon: Leaf,
    products: [
      'Poleiro de madeira 15 cm',
      'Poleiro de madeira 20 cm',
      'Poleiro de madeira 30 cm',
      'Poleiro de galho natural',
      'Poleiro plástico curto',
      'Poleiro plástico longo',
      'Poleiro com fixação lateral',
      'Poleiro para voadeira',
      'Kit com 2 poleiros',
      'Kit com 4 poleiros',
    ],
  },
  {
    id: 'gaiolas',
    name: 'Gaiolas',
    description: 'Espaço e praticidade para a rotina do seu canário.',
    icon: Fence,
    products: [
      'Gaiola compacta',
      'Gaiola com bandeja removível',
      'Gaiola com portas laterais',
      'Gaiola para transporte',
      'Gaiola de criação',
      'Gaiola de criação com divisória',
      'Gaiola modelo amplo',
      'Voadeira pequena',
      'Voadeira média',
      'Voadeira ampla',
    ],
  },
];
const productSlug = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export default function Home() {
  return (
    <>
      <div className="preview-notice">
        PRÉVIA DA LOJA <span>•</span> Produtos ilustrativos. Pedidos e
        pagamentos ainda não estão disponíveis.
      </div>
      <header className="header wrap">
        <a
          className="brand"
          href="#inicio"
          aria-label="Canário Pé Duro, início"
        >
          <span className="brand-icon">
            <Bird size={30} />
          </span>
          <span>
            CANÁRIO
            <strong>
              PÉ DURO<span className="brand-dot">.</span>
            </strong>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#historia">Nossa história</a>
          <a href="/carrinho.html">Sacola</a>
        </nav>
        <a className="header-link" href="#categorias">
          Conheça a loja <ArrowUpRight size={18} />
        </a>
      </header>
      <main id="inicio">
        <section className="hero wrap">
          <div className="hero-copy">
            <span className="eyebrow">PARA QUEM CUIDA. PARA QUEM CRIA.</span>
            <h1>
              Pequenos cuidados.
              <br />
              Um mundo de <em>cantos.</em>
            </h1>
            <p>
              Bebedouros, poleiros e gaiolas para fazer parte da rotina de quem
              ama canários.
            </p>
            <a className="primary" href="#produtos">
              Explorar produtos <ArrowUpRight size={20} />
            </a>
            <div className="hero-foot">
              <span className="mini-line" />
              CANÁRIO-BELGA É A NOSSA PAIXÃO
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/images/canary-hero.jpg"
              alt="Canário amarelo pousado em um galho"
              fetchPriority="high"
            />
            <span className="photo-tag">
              <Bird size={19} />
              Cuidado que acompanha cada canto.
            </span>
          </div>
        </section>
        <section
          className="category-section wrap"
          id="categorias"
          aria-labelledby="category-title"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">O QUE SEU CANÁRIO PRECISA</span>
              <h2 id="category-title">Encontre por categoria</h2>
            </div>
            <a className="text-link" href="#produtos">
              Ver a coleção <ArrowDown size={17} />
            </a>
          </div>
          <div className="category-grid">
            {categories.map((c, i) => (
              <a
                key={c.id}
                href={'#' + c.id}
                className={'category category-' + i}
              >
                <span className="category-icon">
                  <c.icon size={32} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{c.name}</h3>
                  <span>10 produtos de exemplo</span>
                </div>
                <ArrowUpRight className="category-arrow" size={24} />
              </a>
            ))}
          </div>
        </section>
        <div className="catalog wrap" id="produtos">
          {categories.map((c, i) => (
            <section
              className="product-section"
              key={c.id}
              id={c.id}
              aria-labelledby={c.id + '-title'}
            >
              <div className="section-head">
                <div>
                  <span className="eyebrow">0{i + 1} / NOSSA VITRINE</span>
                  <h2 id={c.id + '-title'}>{c.name}</h2>
                  <p>{c.description}</p>
                </div>
                <span className="count">10 itens</span>
              </div>
              <Carousel
                className="product-carousel"
                opts={{ align: 'start', slidesToScroll: 'auto' }}
                aria-label={'Produtos de ' + c.name}
              >
                <div className="carousel-toolbar">
                  <span>Deslize para explorar</span>
                  <div className="carousel-buttons">
                    <CarouselPrevious
                      className="catalog-arrow"
                      aria-label={'Ver produtos anteriores de ' + c.name}
                    />
                    <CarouselNext
                      className="catalog-arrow"
                      aria-label={'Ver próximos produtos de ' + c.name}
                    />
                  </div>
                </div>
                <CarouselContent className="product-track">
                  {c.products.map((name, index) => (
                    <CarouselItem
                      className="product-slide"
                      key={name}
                      aria-label={index + 1 + ' de 10: ' + name}
                    >
                      <a className="product" href={'/produto/' + productSlug(name) + '.html'} aria-label={'Abrir ' + name}>
                        <div className={'product-image product-image-' + i}>
                          <span className="sample">SEM FOTO</span>
                          <span className="product-placeholder">
                            Foto do produto
                            <br />
                            <small>adicione depois</small>
                          </span>
                          <span className="product-number">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="product-info">
                          <span className="product-category">{c.name}</span>
                          <h3>{name}</h3>
                          <span className="product-open">
                            Ver produto e adicionar à sacola <ArrowUpRight size={16} />
                          </span>
                        </div>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </section>
          ))}
        </div>
        <section className="story" id="historia">
          <div className="story-inner wrap">
            <div className="story-photos">
              <img
                className="story-photo-back"
                src="/images/canary-hero.jpg"
                alt="Canário amarelo em um galho, foto provisória para a história da loja"
                loading="lazy"
              />
              <img
                className="story-photo-front"
                src="/images/canary-story.jpg"
                alt="Canário amarelo em detalhe, foto provisória para a história da loja"
                loading="lazy"
              />
              <span className="story-stamp">
                DE QUEM AMA
                <Bird size={27} />
                PARA QUEM CUIDA
              </span>
            </div>
            <div className="story-copy">
              <span className="eyebrow">NOSSA HISTÓRIA</span>
              <h2>
                Uma paixão que
                <br />
                vira <em>cuidado.</em>
              </h2>
              <p>
                A Canário Pé Duro está ganhando sua casa na internet: um espaço
                dedicado a quem compartilha a paixão pelos canários e pelo
                cuidado no dia a dia.
              </p>
              <p>
                Essa história já reúne uma comunidade de cerca de 400 pessoas.
                Agora, queremos dar o próximo passo e aproximar você dos
                produtos para a sua criação.
              </p>
              <div className="story-note">
                Este é o espaço da sua história. Depois, vamos incluir suas
                fotos e contar como tudo começou.
              </div>
              <span className="story-signature">Canário Pé Duro</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-main wrap">
          <a className="brand" href="#inicio">
            <span className="brand-icon">
              <Bird size={27} />
            </span>
            <span>
              CANÁRIO<strong>PÉ DURO.</strong>
            </span>
          </a>
          <p>Feito para quem tem paixão por canários.</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="contact-bar wrap" id="contato">
          <div>
            <span className="eyebrow">FALE COM A GENTE</span>
            <h2>Contato</h2>
          </div>
          <div className="contact-items">
            <a
              href="https://wa.me/5500000000000"
              aria-label="Contato pelo WhatsApp"
            >
              <span>WhatsApp</span>
              <strong>(00) 00000-0000</strong>
            </a>
            <a href="mailto:contato@canariopeduro.com.br">
              <span>E-mail</span>
              <strong>contato@canariopeduro.com.br</strong>
            </a>
            <span>
              <span>Redes sociais</span>
              <strong>@canariopeduro</strong>
            </span>
          </div>
        </div>
      </footer>
      <div className="footer-bottom wrap">
        Esboço • Catálogo, fotos e textos sujeitos a atualização.
      </div>
    </>
  );
}

