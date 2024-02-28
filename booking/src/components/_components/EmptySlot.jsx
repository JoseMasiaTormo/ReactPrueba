export const EmptySlot = () => (
  <div className="list-items" key={"empty"} data-testid="empty">
    <div className="empty-slots">
      <p>No hay sesiones disponibles para este día.</p>
      <p>Prueba otro día.</p>
    </div>
  </div>
);
