const userData = {
    English: prompt('English grade'),
    
    French: prompt('French grade'),

    Mathematics: prompt('Mathematics grade'),

    Physics: prompt('Physics grade'),

    Chemistry: prompt('Chemistry grade'),

    Biology: prompt('Biology grade'),

    Workshop: prompt('Workshop grade'),

    TechnicalDrawing: prompt('TechnicalDrawing grade'),

    Humanities: prompt('Humanities grade'),
}

A=5
B=4
C=3
D=2
E=1
F=0

English=2
French=1
Mathematics=4
Physics=4
Chemistry=4
Biology=3
Workshop=1
TechnicalDrawing=1
Humanities=1

EnglishPoints = 0;
FrenchPoints=0
MathematicsPoints=0
PhysicsPoints=0
ChemistryPoints=0
BiologyPoints=0
WorkshopPoints=0
TechnicalDrawingPoints=0
HumanitiesPoints=0

if(userData.English=='A'){
    EnglishPoints=English*A;
}else if(userData.English=='B'){
    EnglishPoints=English*B;
}else if(userData.English=='C'){
    EnglishPoints=English*C;
}else if(userData.English=='D'){
    EnglishPoints=English*D;
}else if(userData.English=='E'){
    EnglishPoints=English*E;
}else if(userData.English=='F'){
    EnglishPoints=English*F;
}

if(userData.French=='A'){
    FrenchPoints=French*A;
}else if(userData.French=='B'){
    FrenchPoints=French*B;
}else if(userData.French=='C'){
    FrenchPoints=French*C;
}else if(userData.French=='D'){
    FrenchPoints=French*D;
}else if(userData.French=='E'){
    FrenchPoints=French*E;
}else if(userData.French=='F'){
    FrenchPoints=French*F;
}

if(userData.Mathematics=='A'){
    MathematicsPoints=Mathematics*A;
}else if(userData.Mathematics=='B'){
    MathematicsPoints=Mathematics*B;
}else if(userData.Mathematics=='C'){
    MathematicsPoints=Mathematics*C;
}else if(userData.Mathematics=='D'){
    MathematicsPoints=Mathematics*D;
}else if(userData.Mathematics=='E'){
    MathematicsPoints=Mathematics*E;
}else if(userData.Mathematics=='F'){
    MathematicsPoints=Mathematics*F;
}

if(userData.Physics=='A'){
    PhysicsPoints=Physics*A;
}else if(userData.Physics=='B'){
    PhysicsPoints=Physics*B;
}else if(userData.Physics=='C'){
    PhysicsPoints=Physics*C;
}else if(userData.Physics=='D'){
    PhysicsPoints=Physics*D;
}else if(userData.Physics=='E'){
    PhysicsPoints=Physics*E;
}else if(userData.Physics=='F'){
    PhysicsPoints=Physics*F;
}

if(userData.Chemistry=='A'){
    ChemistryPoints=Chemistry*A;
}else if(userData.Chemistry=='B'){
    ChemistryPoints=Chemistry*B;
}else if(userData.Chemistry=='C'){
    ChemistryPoints=Chemistry*C;
}else if(userData.Chemistry=='D'){
    ChemistryPoints=Chemistry*D;
}else if(userData.Chemistry=='E'){
    ChemistryPoints=Chemistry*E;
}else if(userData.Chemistry=='F'){
    ChemistryPoints=Chemistry*F;
}

if(userData.Biology=='A'){
    BiologyPoints=Biology*A;
}else if(userData.Biology=='B'){
    BiologyPoints=Biology*B;
}else if(userData.Biology=='C'){
    BiologyPoints=Biology*C;
}else if(userData.Biology=='D'){
    BiologyPoints=Biology*D;
}else if(userData.Biology=='E'){
    BiologyPoints=Biology*E;
}else if(userData.Biology=='F'){
    BiologyPoints=Biology*F;
}

if(userData.Workshop=='A'){
    WorkshopPoints=Workshop*A;
}else if(userData.Workshop=='B'){
    WorkshopPoints=Workshop*B;
}else if(userData.Workshop=='C'){
    WorkshopPoints=Workshop*C;
}else if(userData.Workshop=='D'){
    WorkshopPoints=Workshop*D;
}else if(userData.Workshop=='E'){
    WorkshopPoints=Workshop*E;
}else if(userData.Workshop=='F'){
    WorkshopPoints=Workshop*F;
}

if(userData.TechnicalDrawing=='A'){
    TechnicalDrawingPoints=TechnicalDrawing*A;
}else if(userData.TechnicalDrawing=='B'){
    TechnicalDrawingPoints=TechnicalDrawing*B;
}else if(userData.TechnicalDrawing=='C'){
    TechnicalDrawingPoints=TechnicalDrawing*C;
}else if(userData.TechnicalDrawing=='D'){
    TechnicalDrawingPoints=TechnicalDrawing*D;
}else if(userData.TechnicalDrawing=='E'){
    TechnicalDrawingPoints=TechnicalDrawing*E;
}else if(userData.TechnicalDrawing=='F'){
    TechnicalDrawingPoints=TechnicalDrawing*F;
}

if(userData.Humanities=='A'){
    HumanitiesPoints=Humanities*A;
}else if(userData.Humanities=='B'){
    HumanitiesPoints=Humanities*B;
}else if(userData.Humanities=='C'){
    HumanitiesPoints=Humanities*C;
}else if(userData.Humanities=='D'){
    HumanitiesPoints=Humanities*D;
}else if(userData.Humanities=='E'){
    HumanitiesPoints=Humanities*E;
}else if(userData.Humanities=='F'){
    HumanitiesPoints=Humanities*F;
}


TotalPoints = EnglishPoints+FrenchPoints+MathematicsPoints+PhysicsPoints+ChemistryPoints+BiologyPoints+WorkshopPoints+TechnicalDrawingPoints+HumanitiesPoints;
TotalUnits=English+French+Mathematics+Physics+Chemistry+Biology+Workshop+TechnicalDrawing+Humanities;
cgpa=TotalPoints/TotalUnits;
document.write(cgpa)