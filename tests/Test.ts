import {AllInstances} from "../ecore/AllInstances";
import {EcorePackageImpl} from "../ecore/EcorePackageImpl";
import {EClass} from "../ecore/EClass";


test('true', () => {

    let ai = AllInstances.INSTANCE;

    let x = ai.allInstances(EcorePackageImpl.eINSTANCE.getEClass());

    expect(x.length).toEqual(20);
});