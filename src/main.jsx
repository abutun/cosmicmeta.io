import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './archive.css'

const external = (href) => ({ href, target: '_blank', rel: 'noreferrer' })

const collections = [
  {
    name: 'Molecules',
    state: 'Minted out',
    image: '/assets/collection-molecules-original.webp',
    href: 'https://opensea.io/collection/cosmicmetamolecules',
    links: [
      ['OpenSea', 'https://opensea.io/collection/cosmicmetamolecules'],
      ['Coinbase', 'https://nft.coinbase.com/collection/ethereum/0x1e6667753d2516289408bfb3de9c78c5e41eeb78'],
      ['Rarible', 'https://rarible.com/cosmicmetamolecules'],
      ['Mintable', 'https://mintable.app/store/Cosmic-Meta-Molecules-Cosmic-Meta-Multiverse/0x1e6667753d2516289408bfb3de9c78c5e41eeb78'],
      ['Gem', 'https://www.gem.xyz/collection/cosmicmetamolecules'],
      ['Contract', 'https://etherscan.io/address/0x1e6667753D2516289408Bfb3DE9C78C5E41eEB78'],
    ],
  },
  {
    name: 'Pixel Art',
    state: 'Minted out',
    image: '/assets/collection-pixel-art-original.webp',
    href: 'https://opensea.io/collection/cosmicmetapixelart',
    links: [
      ['OpenSea', 'https://opensea.io/collection/cosmicmetapixelart'],
      ['Coinbase', 'https://nft.coinbase.com/collection/ethereum/0xa4f732bc4b83eae2344ba15a70a56ce52e03ed98'],
      ['Rarible', 'https://rarible.com/cosmicmetapixelart'],
      ['Mintable', 'https://mintable.app/store/Cosmic-Meta-Pixel-Art-Cosmic-Meta-Multiverse/0xa4f732bc4b83eae2344ba15a70a56ce52e03ed98'],
      ['Gem', 'https://www.gem.xyz/collection/cosmicmetapixelart'],
      ['Contract', 'https://etherscan.io/address/0xa4f732bC4b83EaE2344ba15a70a56cE52e03Ed98'],
    ],
  },
  {
    name: 'War Chicks',
    state: 'Free mint live',
    image: '/assets/collection-war-chicks-original.webp',
    href: 'https://mint.cosmicmeta.io/',
    actionLabel: 'Mint War Chicks',
    links: [
      ['Free mint', 'https://mint.cosmicmeta.io/'],
      ['Coinbase', 'https://nft.coinbase.com/collection/ethereum/0xcadb229d7989aa25d35a8eee7539e08e43c55fe8'],
      ['Rarible', 'https://rarible.com/cosmicmetawarchicks'],
      ['Mintable', 'https://mintable.app/store/Cosmic-Meta-War-Chicks-Cosmic-Meta-Multiverse/0xcadb229d7989aa25d35a8eee7539e08e43c55fe8'],
      ['Gem', 'https://www.gem.xyz/collection/cosmicmetawarchicks'],
      ['Contract', 'https://etherscan.io/address/0xcadb229d7989aa25d35a8eee7539e08e43c55fe8'],
    ],
  },
  {
    name: 'Circles',
    state: 'Free mint live',
    image: '/assets/collection-circles-original.webp',
    href: 'https://mint.cosmicmeta.io/',
    actionLabel: 'Mint Circles',
    links: [['Free mint', 'https://mint.cosmicmeta.io/']],
  },
]

const utilities = [
  ['Charity', '10% of initial sales will be donated to St. Jude Children’s Research Hospital, with $10,000 pledged to LÖSEV in Istanbul.'],
  ['Play & Earn', 'High-radioactivity molecules can increase factory production rates in our future play & earn game.'],
  ['Passive Income', '10% of initial sales will be distributed to holders at the end of each phase according to NFTs held.'],
  ['Community', 'A shared space for artists, designers and developers building at the edge of the multiverse.'],
  ['Early Access', 'Cosmic Meta NFT holders are automatically whitelisted for all upcoming collections.'],
  ['Support', 'Holder access to NFT advice and smart-contract consultation from the Cosmic Meta NFT team and community.'],
  ['Gifts', 'Giveaways and airdrops are organised at the end of each sales phase.'],
  ['DeFi', 'After War Chicks, Galactica will launch with liquidity, followed by NFT staking rewards.'],
  ['DAO', 'The most active contributors can participate in community life and help guide the project’s direction.'],
]

function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={diagonal ? 'icon icon-diagonal' : 'icon'}><path d="M4 12h15M14 5l7 7-7 7" /></svg>
}

function AtomMark() {
  return <svg className="atom-mark" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="3"/><ellipse cx="22" cy="22" rx="18" ry="8"/><ellipse cx="22" cy="22" rx="18" ry="8" transform="rotate(60 22 22)"/><ellipse cx="22" cy="22" rx="18" ry="8" transform="rotate(-60 22 22)"/></svg>
}

function MenuIcon({ open }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon"><path d={open ? 'M5 5l14 14M19 5L5 19' : 'M3 6h18M3 12h18M3 18h18'} /></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="header"><div className="header-inner">
    <a className="brand" href="#top" aria-label="Cosmic Meta NFT home" onClick={close}><AtomMark /><span>COSMIC META NFT</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">Toggle navigation</span><MenuIcon open={open} /></button>
    <nav id="primary-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
      <a href="#collections" onClick={close}>Collections</a>
      <a href="#utility" onClick={close}>Utility</a>
      <a href="#roadmap" onClick={close}>Roadmap</a>
      <a href="#community" onClick={close}>Community</a>
      <a className="button button-small nav-cta" {...external('https://discord.gg/VDpPSrwRvu')}>Join Discord <Arrow /></a>
    </nav>
  </div></header>
}

function CollectionCard({ collection, index }) {
  const [showLinks, setShowLinks] = useState(false)
  return <article className={`collection-card collection-${index}`}>
    <img src={collection.image} alt={`${collection.name} collection artwork`} loading="lazy" decoding="async" />
    <div className="collection-shade" />
    <div className="collection-copy">
      <div><h3>{collection.name}</h3><p>{collection.state}</p></div>
      {collection.href ? <a className="round-arrow" {...external(collection.href)} aria-label={collection.actionLabel ?? `View ${collection.name} on OpenSea`}><Arrow diagonal /></a> : <span className="coming-orbit" aria-hidden="true" />}
    </div>
    {collection.links.length > 0 && <div className="collection-links">
      <button className="text-button" onClick={() => setShowLinks(!showLinks)} aria-expanded={showLinks}>{showLinks ? 'Close verified links' : 'Verified links'}</button>
      {showLinks && <div className="venue-list" aria-label={`${collection.name} verified marketplaces`}>{collection.links.map(([label, href]) => <a key={label} {...external(href)}>{label}<Arrow diagonal /></a>)}</div>}
    </div>}
  </article>
}

function OrbitDiagram() {
  return <div className="orbit-diagram" aria-label="Galactica ecosystem: stake, play and DAO orbit the Galactica core">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <div className="orbit-node core"><span>✦</span></div>
    <div className="orbit-node node-top">Galactica</div><div className="orbit-node node-left">Stake</div><div className="orbit-node node-right">Play</div><div className="orbit-node node-bottom">DAO</div>
  </div>
}

function App() {
  return <div id="top" className="site-shell">
    <Header />
    <main>
      <section className="hero section-grid"><div className="hero-copy reveal">
        <h1>The universe is<br/>collecting itself.</h1>
        <p>Collect signals across the Cosmic Meta NFT Multiverse. From molecular structures to pixel artifacts and beyond—each collection is part of something larger.</p>
        <a href="#collections" className="button">Explore collections <Arrow /></a>
      </div><div className="hero-art" aria-hidden="true"><div className="orbit-line orbit-line-a"/><div className="orbit-line orbit-line-b"/><img src="/assets/archive-molecule-profile-cutout.png" alt="" fetchPriority="high" decoding="async" /></div>
      </section>

      <section id="collections" className="collections section-grid"><div className="section-intro"><h2>Four signals.<br/><em>One multiverse.</em></h2><p>Distinct collections from across the void. Different forms, same frequency.</p></div>
        <div className="collection-rail">{collections.map((collection, index) => <CollectionCard key={collection.name} collection={collection} index={index} />)}</div>
      </section>

      <section id="utility" className="utility section-grid"><div className="utility-copy"><h2>More than a token.</h2><p className="utility-intro">A growing utility layer, designed around the people who hold it.</p><ol className="utility-list">{utilities.map(([title, text], index) => <li key={title} className={title === 'Play & Earn' ? 'utility-active' : ''}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div><div className="orbit-wrap"><OrbitDiagram /></div></section>

      <section id="roadmap" className="roadmap section-grid"><h2>The next orbit.</h2><div className="timeline" aria-label="Cosmic Meta NFT roadmap"><div className="timeline-line" />{[['01','Molecules','Complete'],['02','Pixel Art','Complete'],['03','War Chicks','Free mint'],['04','Galactica','Staking & DAO']].map(([number, name, status]) => <div className="timeline-item" key={number}><div className="timeline-number">{number}</div><h3>{name}</h3><p>{status}</p></div>)}</div></section>

      <section id="community" className="community section-grid"><div className="community-copy"><h2>Build the <em>next</em><br/>chapter with us.</h2><p>Enter a community of collectors, artists, designers and developers making the Cosmic Meta NFT Multiverse real.</p></div><div className="community-action"><a className="button button-outline" {...external('https://discord.gg/VDpPSrwRvu')}>Enter the community <Arrow diagonal /></a><div className="social-links"><a {...external('https://twitter.com/CosmicMetaX')}>X / Twitter</a><a {...external('https://instagram.com/CosmicMetaDigital')}>Instagram</a><a {...external('https://discord.gg/VDpPSrwRvu')}>Discord</a><a {...external('https://t.me/CosmicMeta')}>Telegram</a></div></div><div className="horizon" aria-hidden="true"><img className="archive-horizon-art" src="/assets/archive-circles-banner.png" alt="" loading="lazy" decoding="async" /><span className="planet" /></div></section>
    </main>
    <footer className="footer section-grid"><a className="brand footer-brand" href="#top"><AtomMark /><span>COSMIC META NFT</span></a><p>Collect the signal. Build the multiverse.</p><div><a {...external('https://cosmic-meta.gitbook.io/cosmic-meta-nft?utm_source=cosmicmeta&utm_medium=u2m.io')}>Read the whitepaper <Arrow diagonal /></a><span>© {new Date().getFullYear()} Cosmic Meta NFT</span></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
