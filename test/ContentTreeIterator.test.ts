import { ContentTreeIterator } from "../src/ContentTreeIterator";
import { EcorePackageImpl } from "../src/EcorePackageImpl";
import { ENamedElement } from "../src/ENamedElement";
import { EObject } from "../src/EObject";

describe("ContentTreeIterator", () => {
    it("hasNext", () => {
      
        //arrange
        const iterator = new ContentTreeIterator(EcorePackageImpl.eINSTANCE)

        //action
        const hasNext = iterator.hasNext()

        //assert
        expect(hasNext).toBeTruthy()
        
    });
    it("next", () => {
      
        //arrange
        const iterator = new ContentTreeIterator(EcorePackageImpl.eINSTANCE)

        //action
        const next = iterator.next()

        //assert
        expect(next).not.toBeNull()
        
    });
});