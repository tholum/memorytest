import { useCallback } from 'react';

const usePatternGenerator = () => {
  // Get total cells to fill based on grid size (roughly 15-25% of grid)
  const getTotalCells = useCallback((gridSize) => {
    const totalGridCells = gridSize * gridSize;
    const minPercent = 0.15;
    const maxPercent = 0.25;
    const min = Math.floor(totalGridCells * minPercent);
    const max = Math.floor(totalGridCells * maxPercent);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  // None: completely random placement
  const generateNone = useCallback((gridSize) => {
    const pattern = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    const totalCells = getTotalCells(gridSize);
    const allPositions = [];

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        allPositions.push([r, c]);
      }
    }

    // Shuffle and pick random positions
    for (let i = allPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]];
    }

    for (let i = 0; i < totalCells && i < allPositions.length; i++) {
      const [r, c] = allPositions[i];
      pattern[r][c] = true;
    }

    return pattern;
  }, [getTotalCells]);

  // Light clustering: smaller clusters, more spread out
  const generateLight = useCallback((gridSize) => {
    const pattern = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    const filledCells = new Set();

    // More clusters but smaller
    const clusterCount = gridSize <= 5 ? 2 : gridSize <= 7 ? 3 : gridSize <= 10 ? 4 : 5;
    const clusterSizeMin = 2;
    const clusterSizeMax = gridSize <= 5 ? 3 : gridSize <= 7 ? 4 : 5;

    const getNeighbors = (row, col) => {
      const neighbors = [];
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize) {
          neighbors.push([nr, nc]);
        }
      }
      return neighbors;
    };

    const findSeedPoint = (attempt = 0) => {
      if (attempt > 100) return null;
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);

      // Larger minimum distance for light clustering
      const minDistance = Math.max(3, Math.floor(gridSize / 3));
      for (const cell of filledCells) {
        const [r, c] = cell.split(',').map(Number);
        const distance = Math.abs(row - r) + Math.abs(col - c);
        if (distance < minDistance) {
          return findSeedPoint(attempt + 1);
        }
      }
      return [row, col];
    };

    const growCluster = (seedRow, seedCol, targetSize) => {
      const clusterCells = [[seedRow, seedCol]];
      pattern[seedRow][seedCol] = true;
      filledCells.add(`${seedRow},${seedCol}`);
      let currentSize = 1;

      while (currentSize < targetSize) {
        const expansionPoints = [];
        for (const [row, col] of clusterCells) {
          const neighbors = getNeighbors(row, col);
          for (const [nr, nc] of neighbors) {
            if (!pattern[nr][nc]) {
              expansionPoints.push([nr, nc]);
            }
          }
        }
        if (expansionPoints.length === 0) break;
        const [newRow, newCol] = expansionPoints[Math.floor(Math.random() * expansionPoints.length)];
        pattern[newRow][newCol] = true;
        filledCells.add(`${newRow},${newCol}`);
        clusterCells.push([newRow, newCol]);
        currentSize++;
      }
    };

    for (let i = 0; i < clusterCount; i++) {
      const seed = findSeedPoint();
      if (!seed) continue;
      const [seedRow, seedCol] = seed;
      const clusterSize = Math.floor(Math.random() * (clusterSizeMax - clusterSizeMin + 1)) + clusterSizeMin;
      growCluster(seedRow, seedCol, clusterSize);
    }

    return pattern;
  }, []);

  // Medium clustering: current logic (balanced)
  const generateMedium = useCallback((gridSize) => {
    const pattern = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    const filledCells = new Set();

    const getClusterCount = () => {
      if (gridSize <= 5) return { min: 1, max: 2 };
      if (gridSize <= 7) return { min: 2, max: 3 };
      if (gridSize <= 10) return { min: 2, max: 4 };
      return { min: 3, max: 5 };
    };

    const getClusterSize = () => {
      if (gridSize <= 5) return { min: 3, max: 5 };
      if (gridSize <= 7) return { min: 4, max: 6 };
      if (gridSize <= 10) return { min: 5, max: 8 };
      return { min: 5, max: 10 };
    };

    const { min: minClusters, max: maxClusters } = getClusterCount();
    const clusterCount = Math.floor(Math.random() * (maxClusters - minClusters + 1)) + minClusters;
    const { min: minSize, max: maxSize } = getClusterSize();

    const getNeighbors = (row, col) => {
      const neighbors = [];
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize) {
          neighbors.push([nr, nc]);
        }
      }
      return neighbors;
    };

    const findSeedPoint = (attempt = 0) => {
      if (attempt > 100) return null;
      const margin = Math.min(1, Math.floor(gridSize / 5));
      const row = Math.floor(Math.random() * (gridSize - 2 * margin)) + margin;
      const col = Math.floor(Math.random() * (gridSize - 2 * margin)) + margin;

      const minDistance = Math.max(2, Math.floor(gridSize / 4));
      for (const cell of filledCells) {
        const [r, c] = cell.split(',').map(Number);
        const distance = Math.abs(row - r) + Math.abs(col - c);
        if (distance < minDistance) {
          return findSeedPoint(attempt + 1);
        }
      }
      return [row, col];
    };

    const growCluster = (seedRow, seedCol, targetSize) => {
      const clusterCells = [[seedRow, seedCol]];
      pattern[seedRow][seedCol] = true;
      filledCells.add(`${seedRow},${seedCol}`);
      let currentSize = 1;

      while (currentSize < targetSize) {
        const expansionPoints = [];
        for (const [row, col] of clusterCells) {
          const neighbors = getNeighbors(row, col);
          for (const [nr, nc] of neighbors) {
            if (!pattern[nr][nc]) {
              expansionPoints.push([nr, nc]);
            }
          }
        }
        if (expansionPoints.length === 0) break;
        const [newRow, newCol] = expansionPoints[Math.floor(Math.random() * expansionPoints.length)];
        pattern[newRow][newCol] = true;
        filledCells.add(`${newRow},${newCol}`);
        clusterCells.push([newRow, newCol]);
        currentSize++;
      }
    };

    for (let i = 0; i < clusterCount; i++) {
      const seed = findSeedPoint();
      if (!seed) continue;
      const [seedRow, seedCol] = seed;
      const clusterSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
      growCluster(seedRow, seedCol, clusterSize);
    }

    return pattern;
  }, []);

  // Heavy clustering: fewer but larger, denser clusters
  const generateHeavy = useCallback((gridSize) => {
    const pattern = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    const filledCells = new Set();

    // Fewer clusters but much larger
    const clusterCount = gridSize <= 5 ? 1 : gridSize <= 7 ? 1 : gridSize <= 10 ? 2 : 2;
    const clusterSizeMin = gridSize <= 5 ? 5 : gridSize <= 7 ? 7 : gridSize <= 10 ? 10 : 15;
    const clusterSizeMax = gridSize <= 5 ? 8 : gridSize <= 7 ? 12 : gridSize <= 10 ? 18 : 25;

    const getNeighbors = (row, col, includeDiagonal = true) => {
      const neighbors = [];
      const directions = includeDiagonal
        ? [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
        : [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize) {
          neighbors.push([nr, nc]);
        }
      }
      return neighbors;
    };

    const findSeedPoint = (attempt = 0) => {
      if (attempt > 100) return null;
      // Center seeds more for heavy clustering
      const margin = Math.floor(gridSize / 4);
      const row = Math.floor(Math.random() * (gridSize - 2 * margin)) + margin;
      const col = Math.floor(Math.random() * (gridSize - 2 * margin)) + margin;

      // Allow clusters to be closer
      const minDistance = Math.max(1, Math.floor(gridSize / 6));
      for (const cell of filledCells) {
        const [r, c] = cell.split(',').map(Number);
        const distance = Math.abs(row - r) + Math.abs(col - c);
        if (distance < minDistance) {
          return findSeedPoint(attempt + 1);
        }
      }
      return [row, col];
    };

    const growCluster = (seedRow, seedCol, targetSize) => {
      const clusterCells = [[seedRow, seedCol]];
      pattern[seedRow][seedCol] = true;
      filledCells.add(`${seedRow},${seedCol}`);
      let currentSize = 1;

      while (currentSize < targetSize) {
        const expansionPoints = [];
        for (const [row, col] of clusterCells) {
          // Use cardinal directions only for more compact growth
          const neighbors = getNeighbors(row, col, false);
          for (const [nr, nc] of neighbors) {
            if (!pattern[nr][nc]) {
              // Weight toward center of cluster for denser shapes
              const centerR = clusterCells.reduce((sum, [r]) => sum + r, 0) / clusterCells.length;
              const centerC = clusterCells.reduce((sum, [, c]) => sum + c, 0) / clusterCells.length;
              const distToCenter = Math.abs(nr - centerR) + Math.abs(nc - centerC);
              // Add multiple times if closer to center
              const weight = Math.max(1, 4 - Math.floor(distToCenter));
              for (let w = 0; w < weight; w++) {
                expansionPoints.push([nr, nc]);
              }
            }
          }
        }
        if (expansionPoints.length === 0) break;
        const [newRow, newCol] = expansionPoints[Math.floor(Math.random() * expansionPoints.length)];
        if (!pattern[newRow][newCol]) {
          pattern[newRow][newCol] = true;
          filledCells.add(`${newRow},${newCol}`);
          clusterCells.push([newRow, newCol]);
          currentSize++;
        }
      }
    };

    for (let i = 0; i < clusterCount; i++) {
      const seed = findSeedPoint();
      if (!seed) continue;
      const [seedRow, seedCol] = seed;
      const clusterSize = Math.floor(Math.random() * (clusterSizeMax - clusterSizeMin + 1)) + clusterSizeMin;
      growCluster(seedRow, seedCol, clusterSize);
    }

    return pattern;
  }, []);

  const generatePattern = useCallback((gridSize, clustering = 'medium') => {
    switch (clustering) {
      case 'none':
        return generateNone(gridSize);
      case 'light':
        return generateLight(gridSize);
      case 'heavy':
        return generateHeavy(gridSize);
      case 'medium':
      default:
        return generateMedium(gridSize);
    }
  }, [generateNone, generateLight, generateMedium, generateHeavy]);

  return { generatePattern };
};

export default usePatternGenerator;
