export default function Brand(){
  const b=["Pakshoo","Home Plus","Golrang","Bingo","OOH"];
  return(
    <section style={{padding:80,textAlign:'center'}}>
      <h2>Brands</h2>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        {b.map(x=><div key={x} style={{border:'1px solid #333',padding:'8px 14px',borderRadius:999}}>{x}</div>)}
      </div>
    </section>
  )
}
