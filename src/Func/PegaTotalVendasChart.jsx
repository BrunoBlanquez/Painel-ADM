import PegaValorVendas from "./PegaValorVendas"

export default function PegaTotalVendasChart() {
  return (
    [
      {
        name: 'Abr',
        "Vendas Totais": PegaValorVendas(3)
      },
      {
        name: 'Mai',
        "Vendas Totais": PegaValorVendas(4)
      },
      {
        name: 'Jun',
        "Vendas Totais": PegaValorVendas(5)
      }

    ]
  )
} 