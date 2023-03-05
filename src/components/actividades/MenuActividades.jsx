import React from 'react';

export default function MenuActividades({ handleActividadClick }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center text-[0.85em]">
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('fiestas-patrias-cc')}>Fiestas Patrias Casa Central</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('fiestas-patrias-brisa')}>Fiestas Patrias Sede Brisa</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('muestra-folclorica')}>Muestra Folclórica</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('aniversario-2022-cc')}>Aniversario 2022 Casa Central</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('aniversario-2022-brisa')}>Aniversario 2022 Sede Brisa</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('dia-del-profe-cc')}>Día del Profesor Casa Central</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('dia-del-profe-brisa')}>Día del Profesor  Sede Brisa</button>
            <button className="p-3 bg-primary hover:bg-secondary text-white rounded-xl" onClick={() => handleActividadClick('aniversario-111')}>Acto Aniversario 111 años</button>
        </div>
    );
}
