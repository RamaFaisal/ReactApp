function MenuResto(){

  const styleMenuItem = {
    backgroundColor: "#999",
    padding: "10px",
    color: "#fff",
    borderRadius: "10px",
    marginBottom: "5px",
  }

  const isMakanan = false;

  const menu = [
    { nama: "Nasi Bakar 🍘", harga: "Rp. 10.000" },
    { nama: "Mie Ayam 🍜", harga: "Rp. 12.000" },
    { nama: "Ayam Goreng 🍗", harga: "Rp. 5.000"},
  ];

  return (
    <>
      {menu.map((item, index) => {
        return (
          <div style={styleMenuItem} key={index}>
            <div>
              <b>Nama Menu: </b>
              <em>{item.nama}</em>
            </div>
            <div>
              <b>Harga: </b>
              <em>{item.harga}</em>
            </div>

            {/* {(isMakanan == true) ? (<div>Tipe: Makanan</div>) : (<div>Tipe: Minuman</div>)} */}
            {isMakanan == true && <div>Tipe: Makanan</div>}
          </div>
        );
      })}
    </>
  );
}
export default MenuResto