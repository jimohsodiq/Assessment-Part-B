function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {},
  }

  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)])

  for (const key of allKeys) {
    const hasInOld = Object.prototype.hasOwnProperty.call(oldObj, key)
    const hasInNew = Object.prototype.hasOwnProperty.call(newObj, key)

    if (!hasInOld && hasInNew) {
      result.added[key] = newObj[key]
    } else if (hasInOld && !hasInNew) {
      result.removed[key] = oldObj[key]
    } else if (hasInOld && hasInNew && oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      }
    }
  }

  return result
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
)
