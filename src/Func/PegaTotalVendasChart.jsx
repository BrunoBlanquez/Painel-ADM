import PegaValorVendas from "./PegaValorVendas"

export default function PegaTotalVendasChart() {
  return (
    [
      {
        "Vendas Totais": PegaValorVendas(3)
      },
      {
        "Vendas Totais": PegaValorVendas(4)
      },
      {
        "Vendas Totais": PegaValorVendas(5)
      }

    ]
  )
} 