import react from "react";
import { Card, Row, Col } from 'react-bootstrap';

const content = () => {
    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card">
                <img class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <p class="card-text">Website ini merupakan penyedia layanan dan pusat kuliner yang ada di seluruh Indonesia secara online. 
                    Pencarian kuliner melalui website yang diakses user dalam mencari kuliner yang diinginkan. 
                    Website ini memberikan transaksi yang berkualitas bagi penjual, serta menyediakan pilihan jual beli online terlengkap bagi pembeli. 
                    Kami memberikan akses gratis ke semua pengguna untuk memasang dan memasarkan usaha, jual beli, produk, dan jasa khususnya dibidang makanan dan minuman. 
                    Kami mempunyai misi untuk membangun platform jual beli dan pasang iklan terbesar dan terlengkap di Indonesia. 
                    Selain itu, dikarenakan dimasa pandemic seperti sekarang ini, banyak tempat kuliner yang mengalami penurunan pendapatan dan beberapa penjual mengeluhkan 
                    mengenai belum adanya media online yang informatif untuk pemesanan yang menjelaskan secara detail makanan dan minuman yang ditawarkan sehingga memudahkan 
                    pemesanan pelanggan terhadap kuliner yang dijual.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default content