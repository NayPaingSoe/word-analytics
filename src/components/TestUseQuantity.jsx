import { useQuantity } from "../lib/hooks";

export default function TestUseQuantity() {
    const {todosCount} = useQuantity();
    return (
    <div>
      {todosCount}
    </div>
  )
}
