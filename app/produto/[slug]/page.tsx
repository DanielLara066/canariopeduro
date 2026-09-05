import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Bird } from 'lucide-react';

const products = [
  'Bebedouro tubular 50 ml','Bebedouro tubular 100 ml','Bebedouro tubular 200 ml','Bebedouro automático','Bebedouro de bico curto','Bebedouro de bico largo','Bebedouro com presilha','Bebedouro para voadeira','Kit com 2 bebedouros','Kit com 4 bebedouros',
  'Poleiro de madeira 15 cm','Poleiro de madeira 20 cm','Poleiro de madeira 30 cm','Poleiro de galho natural','Poleiro plástico curto','Poleiro plástico longo','Poleiro com fixação lateral','Poleiro para voadeira','Kit com 2 poleiros','Kit com 4 poleiros',
  'Gaiola compacta','Gaiola com bandeja removível','Gaiola com portas laterais','Gaiola para transporte','Gaiola de criação','Gaiola de criação com divisória','Gaiola modelo amplo','Voadeira pequena','Voadeira média','Voadeira ampla',
];
const slugify = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function generateStaticParams() { return products.map((name) => ({ slug: slugify(name) })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const name = products.find((item) => slugify(item) === params.slug) ?? 'Produto'; return { title: `${name} | Canário Pé Duro`, description: `Confira detalhes de ${name}.` }; }
export default function ProductPage({ params }: { params: { slug: string } }) {
  const name = products.find((item) => slugify(item) === params.slug) ?? 'Produto';
  const category = name.toLowerCase().includes('bebedouro') || name.toLowerCase().includes('kit com') && params.slug.includes('bebedouro') ? 'Bebedouros' : name.toLowerCase().includes('poleiro') ? 'Poleiros' : 'Gaiolas';
  return <main className="product-page"><header className="product-page-header wrap"><Link className="brand" href="/"><span className="brand-icon"><Bird size={30}/></span><span>CANÁRIO<strong>PÉ DURO<span className="brand-dot">.</span></strong></span></Link><Link className="back-link" href="/"><ArrowLeft size={18}/> Voltar para produtos</Link></header><section className="product-detail wrap"><div className="detail-empty"><span>SEM FOTO</span><p>Espaço para foto do produto</p><small>Você pode adicionar a imagem depois.</small></div><div className="detail-copy"><span className="eyebrow">{category}</span><h1>{name}</h1><p className="detail-description">Escolha a opção ideal para o seu canário e confira os detalhes antes de comprar.</p><div className="detail-fields"><label>Tamanho<select aria-label={'Tamanho de '+name}><option>Único</option><option>Pequeno</option><option>Médio</option><option>Grande</option></select></label><label>Coloração<select aria-label={'Coloração de '+name}><option>Natural</option><option>Amarelo</option><option>Branco</option><option>Verde</option></select></label></div><div className="detail-purchase"><span>Preço a definir</span><button disabled>Em breve <ArrowUpRight size={17}/></button></div><div className="detail-note">As fotos, preços, estoque e pagamento serão adicionados quando o catálogo estiver pronto.</div></div></section></main>;
}

