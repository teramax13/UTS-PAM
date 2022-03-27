const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan: "HLM",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan: "HLM",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "SA",
    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan: "HLM",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "004",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "005",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "006",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "LA",
    },
    {
        jadwal_id: "007",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "008",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "CL",
    },
]

const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
        
    },
    {
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",
        
    },
    {
        maskapai_id: "SA",
        maskapai_nama: "Sriwijaya Air",
        
    },
    {
        maskapai_id: "BA",
        maskapai_nama: "Batik Air",
        
    },
    {
        maskapai_id: "CL",
        maskapai_nama: "Citilink",
        
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        
    },
]

const Bandara = [
    {
        bandara_kode: "CGK",
        bandara_nama: "Soekarno Hatta",
    },
    {
        bandara_kode: "HLM",
        bandara_nama: "Halim Perdanakusuma",
    },
    {
        bandara_kode: "SUB",
        bandara_nama: "Juanda",
    },
    {
        bandara_kode: "TKG",
        bandara_nama: "Raden Inten",
    },
]

export {Maskapai, Bandara, Jadwal}